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
  Mutation: {},
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

  }
}
