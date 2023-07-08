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
}

export default Enrollments
