
class Accounts {
  getProducer (id: string): any {
    console.log('getProducer', { id })
    return {
      id: '1',
      name: 'Producer 1',
      email: 'mock@email.com',
      password: '123456',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      role: 'Producer'
    }
  }

  getSubscriber (id: string): any {
    console.log('getSubscriber', { id })
    return {
      id: '2',
      name: 'Subscriber 1',
      email: 'mock1@email.com',
      password: '1234564',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      role: 'Subscriber'
    }
  }

  getSubscribersByProducerId (id: string): any {
    console.log('getSubscribersByProducerId', { id })
    return [
      this.getSubscriber('2')
    ]
  }

  createProducer (createProducerInput: any, envelope: any): any {
    console.log('createProducer', { createProducerInput })
    return envelope({ producer: this.getProducer('1') })
  }

  createSubscriber (createSubscriberInput: any, envelope: any): any {
    console.log('createSubscriber', { createSubscriberInput })
    return envelope({ subscriber: this.getSubscriber('2') })
  }
}

export default Accounts
