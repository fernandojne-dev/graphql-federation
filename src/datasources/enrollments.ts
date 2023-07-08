class Enrollments {
  getEnrollmentsBySubscriberId (subscriberId: string): any {
    return [
      {
        id: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        subscriberId,
        producerId: '1'
      }
    ]
  }

  subscribeToProducer (subscribeToProducerInput: any, envelope: any): any {
    console.log('subscribeToProducer', { subscribeToProducerInput })
    return envelope({ subscription: this.getEnrollmentsBySubscriberId('1')[0] })
  }
}

export default Enrollments
