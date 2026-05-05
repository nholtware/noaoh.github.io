import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionType} from '../../data/dataDef';

const Section: FC<
  PropsWithChildren<{section: SectionType; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, section, noPadding = false, className}) => {
  return (
    <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={section.urlName}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
