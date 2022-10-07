import {basePage} from './basePage'
import {By} from 'selenium-webdriver'

export class Pet extends basePage {
   lizardBtn: By = By.xpath('//*[@id="MainImageContent"]/map/area[4]')
   logoBtn: By = By.xpath(' //*[@id="LogoContent"]/a/img') 
   rsBtn: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[1]')
   vrsBtn: By = By.xpath(' //*[@id="Catalog"]/table/tbody/tr[2]/td[1]/a')
   qty: By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[5]/input')
   addToCartBtn: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[7]/td/a')
   updateCartBtn: By = By.xpath(' //*[@id="Cart"]/form/table/tbody/tr[3]/td[1]/input')
   searchBtn: By = By.xpath(' //*[@id="SearchContent"]/form/input[2]')

    constructor() {
    super({url: 'https://petstore.octoperf.com/actions/Catalog.action'})
}
}