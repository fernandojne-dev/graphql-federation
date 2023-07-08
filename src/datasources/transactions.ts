class Transactions {
  getTransaction (transactionId): any {
    return {
      id: transactionId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      subscriberId: '2',
      producerId: '1',
      amount: 10,
      status: 'APPROVED',
      paymentMethod: 'CREDIT_CARD',
      paymentId: '12143t34534634gbherhwerthn353'

    }
  }

  donateToSubscriber (donateToSubscriberInput, envelope): any {
    console.log('donateToSubscriber', { donateToSubscriberInput })
    return envelope({ transaction: this.getTransaction('1') })
  }
}

export default Transactions
