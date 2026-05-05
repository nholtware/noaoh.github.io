import classNames from 'classnames';
import {compareAsc, compareDesc} from 'date-fns';
import Fuse from 'fuse.js';
import {ChangeEvent, FC, PropsWithChildren, useEffect, useMemo, useState} from 'react';
import type {MetaFunction} from 'react-router';
import {Textfit} from 'react-textfit';

import GridView from '../components/GridView';
import Header from '../components/Sections/OtherHeader';
import {Select, SelectProps} from '../components/Select';
import {navLinks} from '../data/data';
import {and} from '../utils';

export const meta: MetaFunction = () => [
  {title: 'My Vinyl Collection'},
  {name: 'description', content: "Noah Holt's vinyl record collection"},
];

const SortOrder = {
  ASC: 'ASC',
  DESC: 'DESC',
};

const SortType = {
  DATE: 'DATE',
  NAME: 'NAME',
};

const sortByName = (items: VinylItemProps[], order: string): VinylItemProps[] => {
  if (!items || items.length === 0) {
    return [];
  }

  return [...items].sort((a: VinylItemProps, b: VinylItemProps): number => {
    const artistsA = and(a.item.artists, 'and');
    const artistsB = and(b.item.artists, 'and');
    if (order === SortOrder.DESC) {
      const compareArtists = artistsA.localeCompare(artistsB);
      return compareArtists === 0 ? a.item.album.localeCompare(b.item.album) : compareArtists;
    } else {
      const compareArtists = artistsB.localeCompare(artistsA);
      return compareArtists === 0 ? b.item.album.localeCompare(a.item.album) : compareArtists;
    }
  });
};

const sortByDate = (items: VinylItemProps[], order: string): VinylItemProps[] => {
  if (!items || items.length === 0) {
    return [];
  }

  return [...items].sort((a: VinylItemProps, b: VinylItemProps): number => {
    const {dateAdded: dateAddedStringA} = a.item;
    const {dateAdded: dateAddedStringB} = b.item;
    const dateAddedA = new Date(dateAddedStringA);
    const dateAddedB = new Date(dateAddedStringB);
    return order === SortOrder.ASC ? compareAsc(dateAddedA, dateAddedB) : compareDesc(dateAddedA, dateAddedB);
  });
};

const orderCollection = (vinylCollection: VinylItemProps[], sortType: string, sortOrder: string) => {
  return sortType === SortType.DATE ? sortByDate(vinylCollection, sortOrder) : sortByName(vinylCollection, sortOrder);
};

interface VinylItem {
  thumbnail: string;
  dateAdded: string;
  album: string;
  artists: string[];
  needsBlur: boolean;
}

interface VinylItemProps {
  id: string;
  item: VinylItem;
}

interface VinylCollectionProps {
  vinylCollection: VinylItemProps[];
  noSearchResults: boolean;
  searchTerm: string;
}

const VinylItemElement: FC<PropsWithChildren<VinylItem>> = (props: VinylItem) => {
  const formattedDate = new Date(props.dateAdded).toLocaleDateString();
  return (
    <div className={classNames('relative p-4', 'align-center flex flex-wrap')}>
      <>
        <img
          alt="Image didn't load"
          className={classNames({'blur-sm': props.needsBlur}, 'mr-4 h-[150px] w-[150px]')}
          height={150}
          src={props.thumbnail}
          width={150}
        />{' '}
        <Textfit className="ml-2 text-white" min={20} mode="multi">
          <strong>{props.artists.length === 1 ? 'Artist:' : 'Artists:'}</strong> {and(props.artists, 'and')}
          <br />
          <strong>Album:</strong> {props.album}
          <br />
          <strong>Date Added:</strong> {formattedDate}
        </Textfit>
      </>
    </div>
  );
};

const VinylCollection: FC<PropsWithChildren<VinylCollectionProps>> = props => {
  if (props.vinylCollection.length === 0 && !props.noSearchResults) {
    return (
      <Textfit className="text-white" max={30} mode="single">
        My vinyl collection is loading...
      </Textfit>
    );
  } else if (props.vinylCollection.length !== 0) {
    return (
          <GridView>
        {props.vinylCollection.map(({item, id}) => {
          return (
            <div key={id}>
              <VinylItemElement
                album={item.album}
                artists={item.artists}
                dateAdded={item.dateAdded}
                needsBlur={item.needsBlur}
                thumbnail={item.thumbnail}
              />
            </div>
          );
        })}
      </GridView>
    );
  } else {
    return (
      <Textfit className="text-white" min={20} mode="multi">
        There are no results for the search '{props.searchTerm}'. Try backspacing or searching for another search term.
      </Textfit>
    );
  }
};

const processFuseSearchResults = (searchResults: any[]) => {
  return [...searchResults].sort((a, b) => a.refIndex - b.refIndex).map(i => i.item);
};

const fuse = new Fuse([], {
  threshold: 0.2,
  keys: ['item.album', 'item.artists'],
});

const VinylCollectionPage: FC = () => {
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);
  const [sortType, setSortType] = useState(SortType.NAME);
  const [vinylCollection, setVinylCollection] = useState<VinylItemProps[]>([]);
  const [originalVinylCollection, setOriginalVinylCollection] = useState<VinylItemProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const noSearchResults = useMemo(() => originalVinylCollection.length !== 0, [originalVinylCollection]);

  const getVinylCollection = async () => {
    const url = '/api/vinylCollection';
    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url, options);
      const vinylItems: VinylItemProps[] = await resp.json();
      const sortedVinylItems = orderCollection(vinylItems, sortType, sortOrder);
      setVinylCollection(sortedVinylItems);
      setOriginalVinylCollection(sortedVinylItems);
      fuse.setCollection(originalVinylCollection as unknown as never[]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVinylCollection();
  }, []);

  const fuseSearch = (vinylCollection: VinylItemProps[], searchTerm: string) => {
    if (searchTerm === '') {
      return vinylCollection;
    } else {
      fuse.setCollection(vinylCollection as unknown as never[]);
      const searchResults = processFuseSearchResults(fuse.search(searchTerm));
      if (searchResults.length === 0) {
        fuse.setCollection(originalVinylCollection as unknown as never[]);
        return searchResults;
      } else {
        fuse.setCollection(searchResults as unknown as never[]);
        return searchResults;
      }
    }
  };

  const handleSortOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleSortTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const sortOrderProps: Omit<SelectProps, 'value'> = {
    handleChange: handleSortOrderChange,
    options: [
      {label: 'Ascending', value: 'ASC'},
      {label: 'Descending', value: 'DESC'},
    ],
  };

  const sortTypeProps: Omit<SelectProps, 'value'> = {
    handleChange: handleSortTypeChange,
    options: [
      {label: 'Name', value: 'NAME'},
      {label: 'Date Added', value: 'DATE'},
    ],
  };

  return (
    <>
      <Header sections={navLinks} />
      <Select
        className="mt-20"
        handleChange={sortOrderProps.handleChange}
        options={sortOrderProps.options}
        value={sortOrder}
      />
      <br />
      <Select handleChange={sortTypeProps.handleChange} options={sortTypeProps.options} value={sortType} />
      <br />
      <input
        className="rounded-md"
        onChange={handleSearchTermChange}
        placeholder="Search my vinyl collection!"
        type="text"
      />
      <VinylCollection
        noSearchResults={noSearchResults}
        searchTerm={searchTerm}
        vinylCollection={orderCollection(fuseSearch(vinylCollection, searchTerm), sortType, sortOrder)}
      />
    </>
  );
};

export default VinylCollectionPage;
