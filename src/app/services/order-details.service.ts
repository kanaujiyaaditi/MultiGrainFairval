import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Red Wheat ",
      foodDetails:"Hard Red Wheat.With a protein content of about 10.5%, it is quite versatile as a general purpose flour.",
      foodPrice:200,
      foodImg:"https://grainplacefoods.com/wp-content/uploads/2014/05/aps_hard_red_wheat.jpg"
    },
    {
      id:2,
      foodName:"Corn",
      foodDetails:"The seeds, which are also known as corn, are used as food for humans and livestock and as a source of biofuel and can be processed into a wide range of useful chemicals",
      foodPrice:369,
      foodImg:"https://grainplacefoods.com/wp-content/uploads/2014/06/aps_corn_yellow_dent.jpg"
    },
    {
      id:3,
      foodName:"Triticale",
      foodDetails:"Triticale is a relatively new grain, the result of successful plant breeding over the past 100+ years, and it is still a work in progress.",
      foodPrice:149,
      foodImg:"https://grainplacefoods.com/wp-content/uploads/2014/05/aps_triticale_rolled.jpg"
    },
    {
      id:4,
      foodName:"Chia seeds",
      foodDetails:"It originated in Mexico’s central valley, and was an important part of the Aztec and Mayan diets.",
      foodPrice:750,
      foodImg:"https://grainplacefoods.com/wp-content/uploads/2014/05/chia_ps1.jpg"
    },
    {
      id:5,
      foodName:"White Wheat",
      foodDetails:"Hard White Wheat Flour is a 100% whole grain whole wheat flour milled from a different version of wheat than conventional whole wheat flour.",
      foodPrice:105,
      foodImg:"https://grainplacefoods.com/wp-content/uploads/2014/05/aps_hard_white_wheat.jpg"
    },
    {
      id:6,
      foodName:"Barley",
      foodDetails:"an important staple food",
      foodPrice:219,
      foodImg:"https://grainplacefoods.com/wp-content/uploads/2014/05/aps_barley_e-scaled.jpg"
    }
  ]




}
