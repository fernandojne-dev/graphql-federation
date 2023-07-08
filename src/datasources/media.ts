class Media {
  getMovie (id: string): any {
    console.log('getMovie', { id })
    return {
      id: '1',
      title: 'Movie 1',
      description: 'Movie 1 description',
      streamUrl: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
      coverUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg',
      duration: 120,
      releaseDate: new Date().toISOString(),
      director: 'Director 1',
      genre: 'Genre 1',
      rating: 4.5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      producerId: '1',
      type: 'Movie'
    }
  }

  getSerie (id: string): any {
    console.log('getSerie', { id })
    return {
      id: '2',
      title: 'Serie 1',
      description: 'Serie 1 description',
      coverUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg',
      tags: ['tag1', 'tag2'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      producerId: '1',
      type: 'Serie'
    }
  }

  getMediaByProducerId (id: string): any {
    console.log('getMediaByProducerId', { id })
    return [
      this.getMovie('1'),
      this.getSerie('2')
    ]
  }

  getMediaBySubscriberId (id: string): any {
    console.log('getMediaBySubscriberId', { id })
    return [
      this.getMovie('1'),
      this.getSerie('2')
    ]
  }

  getSeasonsBySerieId (id: string): any {
    console.log('getSeasonsBySerieId', { id })
    return [
      {
        id: '1',
        title: 'Season 1',
        description: 'Season 1 description',
        releaseDate: new Date().toISOString(),
        actors: ['actor1', 'actor2'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        serieId: '2',
        episodes: [
          {
            id: '1',
            title: 'Episode 1',
            description: 'Episode 1 description',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            releaseDate: new Date().toISOString(),
            duration: 120,
            streamUrl: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
            coverUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg',
            thumbnailUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg',
            tags: ['tag1', 'tag2'],
            rating: 4.5,
            seasonId: '1'
          }
        ]
      }
    ]
  }
}

export default Media
