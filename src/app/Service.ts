export class Service {
  public setItemToLS = (storageValue, item) => {
    localStorage.setItem(storageValue, item);
  };
  public getItemFromLS = (storageValue) => localStorage.getItem(storageValue);

  public setImgFromLS = () => {

  };

  public getImgFromLS = () => {

  };

}
