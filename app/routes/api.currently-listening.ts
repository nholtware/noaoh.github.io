const getCurrentlyListening = async (lastFmUser: string, lastfmApiKey: string) => {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUser}&api_key=${lastfmApiKey}&format=json`,
    {
      method: 'GET',
    },
  );

  if (response.status !== 200) {
    return {
      data: {
        is_playing: false,
      },
    };
  } else {
    return response.json();
  }
};

const parseCurrentlyListening = (data: any) => {
  const {recenttracks} = data;
  const {track} = recenttracks;
  const {artist, album, image, name, '@attr': attr} = track[0];
  let nowplaying = false;
  if (attr) {
    nowplaying = attr.nowplaying;
  }
  const thumbnail = image[2]['#text'];
  if (!nowplaying) {
    return {
      isPlaying: false,
    };
  } else {
    return {
      isPlaying: true,
      artist: artist['#text'],
      album: album['#text'],
      song: name,
      thumbnail,
    };
  }
};

export async function loader() {
  const {LASTFM_API_KEY: lastfmApiKey, LASTFM_USER: lastfmUser} = process.env;
  try {
    const currentlyListening = await getCurrentlyListening(lastfmUser!, lastfmApiKey!);
    const parsedCurrentlyListening = parseCurrentlyListening(currentlyListening);
    return Response.json(parsedCurrentlyListening);
  } catch (err) {
    console.error(err);
    return Response.json({isPlaying: false});
  }
}
