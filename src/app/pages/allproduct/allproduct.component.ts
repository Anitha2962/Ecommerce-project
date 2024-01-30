import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { HomeImagesService } from 'src/app/sharepage/service/images/home-images.service';
@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent  implements OnInit{
  home_images:Product[] = [];
  constructor(private homeImageService:HomeImagesService,private route:ActivatedRoute){

  }
  
  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
   
        this.home_images =this.homeImageService.getAll().filter(image=>image.name.toLocaleLowerCase().includes(params['searchTerm'].toLowerCase()));
      
    else
    this.home_images= this.homeImageService.getAll();
  console.log(params['searchTerm'])
    }); 
  }
  // searchText:string='';
  // onSearchTextEntered(searchValue:string){
  //   this.searchText=searchValue;
  //   console.log(this.searchText);
  // }
    // this.home_images=this.homeImageService.getAll();
    // console.log(this.home_images);
    
    }
  


