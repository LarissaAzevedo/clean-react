export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado não está certo. Tente novamente em breve')
    this.name = 'UnexpectedError'
  }
}
