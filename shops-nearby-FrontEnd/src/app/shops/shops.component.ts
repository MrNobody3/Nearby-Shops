import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shop';
import { DataService } from '../services/data.service';

@Component({
  selector: 'shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit{
  shops:Shop[];
  shopsIsEmpty:boolean;

  constructor(private service:DataService) { }

  ngOnInit(){
    this.service.getShops()
    .subscribe(shops=>{
      if(shops.length>0){
        this.shops=shops;
      }else{
        this.shopsIsEmpty=true;
      }
    });
  }
  likeShopmethod(idShop){
    this.service.likeShop(idShop).subscribe(res=>{
      if(res) {
        alert('shop liked');
        this.ngOnInit();
    }
    }); 
  }
 
}
