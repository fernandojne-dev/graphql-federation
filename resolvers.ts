export const resolvers = {

  Query: {
    Producer: async (_, { id }, { dataSources }) => {
      return dataSources.accounts.getProducer(id)
    },
    Subscriber: async (_, { id }, { dataSources }) => {
      return dataSources.accounts.getSubscriber(id)
    },
    Movie: async (_, { id }, { dataSources }) => {
      return dataSources.media.getMovie(id)
    },
    Serie: async (_, { id }, { dataSources }) => {
      return dataSources.media.getSerie(id)
    }
  },
  Mutation: {
    createProducer: async (_, { createProducerInput }, { dataSources }) => {
      return dataSources.accounts.createProducer(createProducerInput, envelope)
    },
    createSubscriber: async (_, { createSubscriberInput }, { dataSources }) => {
      return dataSources.accounts.createSubscriber(createSubscriberInput, envelope)
    },
    createMovie: async (_, { createMovieInput }, { dataSources }) => {
      return dataSources.media.createMovie(createMovieInput, envelope)
    },
    createSerie: async (_, { createSerieInput }, { dataSources }) => {
      return dataSources.media.createSerie(createSerieInput, envelope)
    },
    createSeason: async (_, { createSeasonInput }, { dataSources }) => {
      return dataSources.media.createSeason(createSeasonInput, envelope)
    },
    addSeasonToSerie: async (_, { addSeasonToSerieInput }, { dataSources }) => {
      return dataSources.media.addSeasonToSerie(addSeasonToSerieInput, envelope)
    },
    subscribeToProducer: async (_, { subscribeToProducerInput }, { dataSources }) => {
      return dataSources.enrollments.subscribeToProducer(subscribeToProducerInput, envelope)
    },
    donateToSubscriber: async (_, { donateToSubscriberInput }, { dataSources }) => {
      return dataSources.transactions.donateToSubscriber(donateToSubscriberInput, envelope)
    }

  },
  User: {
    __resolveType (user) {
      return user.role
    }
  },
  Media: {
    __resolveType (media) {
      return media.type
    }
  },
  Producer: {
    media: async (parent, _, { dataSources }) => {
      return dataSources.media.getMediaByProducerId(parent.id)
    },
    subscribers: async (parent, _, { dataSources }) => {
      return dataSources.accounts.getSubscribersByProducerId(parent.id)
    }
  },
  Subscriber: {
    subscriptions: async (parent, _, { dataSources }) => {
      return dataSources.enrollments.getEnrollmentsBySubscriberId(parent.id)
    },
    likedMedia: async (parent, _, { dataSources }) => {
      return dataSources.media.getMediaBySubscriberId(parent.id)
    }
  },
  Movie: {
    producer: async ({ producerId }, _, { dataSources }) => {
      return dataSources.accounts.getProducer(producerId)
    }
  },
  Serie: {
    producer: async ({ producerId }, _, { dataSources }) => {
      return dataSources.accounts.getProducer(producerId)
    },
    seasons: async ({ id }, _, { dataSources }) => {
      return dataSources.media.getSeasonsBySerieId(id)
    }
  },
  Enrollments: {
    subscriber: async ({ subscriberId }, _, { dataSources }) => {
      return dataSources.accounts.getSubscriber(subscriberId)
    },
    producer: async ({ producerId }, _, { dataSources }) => {
      return dataSources.accounts.getProducer(producerId)
    }
  },
  Transaction: {
    subscriber: async ({ subscriberId }, _, { dataSources }) => {
      return dataSources.accounts.getSubscriber(subscriberId)
    },
    producer: async ({ producerId }, _, { dataSources }) => {
      return dataSources.accounts.getProducer(producerId)
    }
  }
}

const envelope = (mutationResponse: Object): any => {
  return {
    code: 200,
    success: true,
    message: 'operation performed successfully',
    ...mutationResponse
  }
}
