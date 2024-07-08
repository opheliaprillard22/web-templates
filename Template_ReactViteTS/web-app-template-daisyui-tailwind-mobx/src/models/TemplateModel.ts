import { makeAutoObservable } from 'mobx';

export default class TemplateModel {
  test = 'Hello World!'; // Example property

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  // Add your properties and methods here
  setTest(value: string) {
    this.test = value;
  }
}