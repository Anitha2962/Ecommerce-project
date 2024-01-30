import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class HomeImagesService {

  constructor() { }

  getProductById(id:string):Product{
    return this.getAll().find(Image=>Image.id===parseInt(id))!;
    
  }
  getAllImageBySearchTerm(searchTerm:string):Product[]{
    return this.getAll().filter(image=>image.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }
  getAll(): Product[] {
    return[
      {
        id: 1,
        name: 'Babyhug Cotton Single Jersey Knit Full Sleeves',
        price: 486.36,
        oldprice:579,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth.webp',
        off: 40,
      
        
      },
      {
        id: 2,
        name: 'Little Angels Full Sleeves Striped Front Open Sweater',
        price:456,
        oldprice:679,
        ratingnumber:4.8,
        imageUrl:'../../../assets/images/home_images/cloths/cloth1.webp',
        off: 40,
      

      },
      {
        id: 3,
        name: 'Babyhug 100% Cotton Knit Full Sleeves',
        price:849,
        oldprice:960,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth2.webp',
        off: 40,
      

      },
      {
        id: 4,
        name: 'Kookie Kids Full Sleeves Striped Winter Wear',
        price:670.71,
        oldprice:849,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth3.webp',
        off: 40,
      

      },
      {
        id: 5,
        name: 'CrayonFlakes Full Sleeves Frilled Tie Dye Striped Dress',
        price:499.50,
        oldprice:999,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth4.webp',
        off: 40,
      

      },
      {
        id: 6,
        name: 'CrayonFlakes Full Sleeves Frilled Tie Dye Striped Dress',
        price:1443,
        oldprice:1899,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth5.webp',
        off: 40,
      

      },
      {
        id: 7,
        name: 'Babyhug Cotton Woven Single Jersey JCB Printed ',
        price:710.21,
        oldprice:899,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth6.webp',
        off: 40,
      

      },
      {
        id: 8,
        name: 'Babyhug Cotton Knit Full Sleeves Bear Print',
        price:486.36,
        oldprice:579,
        ratingnumber:4.8,
        imageUrl:'../../../assets/images/home_images/cloths/cloth7.webp',
        off: 40,
      

      },
      {
        id: 9,
        name: 'Kookie Kids Half Sleeves 2 Piece Swimsuit Crab',
        price:956,
        oldprice:1099,
        ratingnumber:4.8,
        imageUrl:'../../../assets/images/home_images/cloths/cloth8.webp',
        off: 40,
      

      },
      {
        id: 10,
        name: 'Babyhug Cotton Knit Half Sleeves Monkey Print',
        price:339.15,
        oldprice:499,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth9.webp',
        off: 40,
      

      },
      {
        id: 11,
        name: 'Babyhug Full Sleeves Frock Swimsuit with Cap',
        price:1130.13,
        oldprice:1299,
        ratingnumber:4.8,
        imageUrl:'../../../assets/images/home_images/cloths/cloth10.webp',
        off: 40,
      

      },
      {
        id: 12,
        name: 'Babyhug Cotton Knit Single Jersey Full Sleeves',
        price:486.36,
        oldprice:766,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/cloths/cloth11.webp',
        off: 40,
      

      },
      {
        id: 13,
        name: 'Cute Walk by Babyhug Slip On Booties with Floral',
        price:424,
        oldprice:599,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot.webp',
        off: 40,
      

      },
      {
        id: 14,
        name: 'Cute Walk by Babyhug Slip On Sandals with Velcro',
        price:578.76,
        oldprice:689,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot1.webp',
        off: 40,
      

      },
      {
        id: 15,
        name: 'Cute Walk by Babyhug Slip On Musical Casual',
        price:583.81,
        oldprice:739,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot2.webp',
        off: 40,
      

      },
      {
        id: 16,
        name: 'Cute Walk by Babyhug Booties with strap and Bow',
        price:766,
        oldprice:899,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot3.webp',
        off: 40,
      

      },
      {
        id: 17,
        name: 'Yellow Bee Rubber Animal Applique Detailed Slingback',
        price:538,
        oldprice:699,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot4.webp',
        off: 40,
      

      },
      {
        id: 18,
        name: 'Cute Walk by Babyhug Velcro Closure Casual',
        price:488.91,
        oldprice:899.51,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot5.webp',
        off: 40,
      

      },
      {
        id: 19,
        name: 'Cute Walk by Babyhug Velcro Closure Casual',
        price:488.91,
        oldprice:899.51,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot5.webp',
        off: 40,
      

      },
      {
        id: 20,
        name: 'Cute Walk by Babyhug Slip On Booties with Bow',
        price:347.53,
        oldprice:519.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot6.webp',
        off: 40,
      

      },
      {
        id: 21,
        name: 'Kid-O-World Velvet Velcro Closure Piping ',
        price:315.99,
        oldprice:370,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot7.webp',
        off: 40,
      

      },
      {
        id: 22,
        name: 'Daizy Floral Applique Embellished Booties - Black',
        price:402.36,
        oldprice:415.87,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot8.webp',
        off: 40,
      

      },
      {
        id: 23,
        name: 'Daizy Beads Detailed Flower Embellished Booties',
        price:394.87,
        oldprice:599,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot9.webp',
        off: 40,
      

      },
      {
        id: 24,
        name: 'Daizy Beads Detailed Flower Embellished Booties - Baby Pink',
        price:503.97,
        oldprice:699,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot10.webp',
        off: 40,
      

      },
      {
        id: 25,
        name: 'Daizy Flower Design Booties - Baby Pink shoes for girls fashion',
        price:387.99,
        oldprice:389.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/shoe/foot11.webp',
        off: 40,
      

      },
      {
        id: 26,
        name: 'Fiddlerz Multi Function Play Gym With Toy Bar ',
        price:891.95,
        oldprice:1200,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play.webp',
        off: 40,
      

      },
      {
        id: 27,
        name: 'Babyhug Rabbit Soft Toy Grey - Height 32 cm',
        price:785.85,
        oldprice:845,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play1.webp',
        off: 40,
      

      },
      {
        id: 28,
        name: 'Fiddlerz Rotating Musical Cot Rattle for Babies cradile',
        price:627.08,
        oldprice:1199.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play2.webp',
        off: 40,
      

      },
      {
        id: 29,
        name: 'Babyhug Baby Lion Soft Toy Yellow - Height 25 cm',
        price:337.00,
        oldprice:545,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play3.webp',
        off: 40,
      

      },
      {
        id: 30,
        name: 'Zest 4 Toyz Playhouse Tent Unicorn Theme - Pink',
        price:1119.99,
        oldprice:2500.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play4.webp',
        off: 40,
      

      },
      {
        id: 31,
        name: 'Babyhug 3 in 1 Slide & See Saw with Basketball Ring',
        price:1709.43,
        oldprice:2999.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play5.webp',
        off: 40,
      

      },
      {
        id: 32,
        name: 'Bonfino My Little Zoo House - Multicolour-baby play',
        price:1336.53,
        oldprice:1995.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play6.webp',
        off: 40,
      

      },
      {
        id: 33,
        name: 'NHR Rechargeable Crawling Crab Toy with Music - Yellow baby crab',
        price:687.74,
        oldprice:899.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/play/play7.webp',
        off: 40,
      

      },
      {
        id: 34,
        name: 'Rising Step Battery Operated 2 in 1 Growing with Baby Swinger',
        price:4559.43,
        oldprice:7999.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/gear/gear.webp',
        off: 40,
      

      },
      {
        id: 35,
        name: 'Baybee Automatic Electric Swing Cradle With Adjustable Swing',
        price:7990.73,
        oldprice:12999.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/gear/gear1.webp',
        off: 40,
      

      },
      {
        id: 36,
        name: 'Baby Bouncer Newborn to Toddler Rocker Cum Reclining',
        price:4026.90,
        oldprice:6495.00,
        ratingnumber:4.8,
        imageUrl: '../../../assets/images/home_images/gear/gear2.webp',
        off: 40,
      

      },
      // {
      //   id: 37,
      //   name: 'Baby Moo Jungle Friends Soothing Vibrations Bouncer Rocker - Green',
      //   price:4689.3,
      //   oldprice:6699.00,
      //   ratingnumber:4.8,
      //   imageUrl: '../../../assets/images/home_images/gear/gear3.webp',
      //   off: 40,
      

      // },
     
    ]
    
  }
}
