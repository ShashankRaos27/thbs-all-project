import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  itemList = [
    {
      title: 'RESTAURANTS',
      content1: 'Order Online',
      content2: 'Book Table',
      content3: 'Trending',
      content4: 'more..',
      imageLink: "../../assets/image/img1.JPG"
    },
    {
      title: 'SHOP ONLINE',
      content1: 'Mobile',
      content2: 'Televisions',
      content3: 'Air Conditioners',
      content4: 'more..',
      imageLink: "../../assets/image/img2.JPG"
    }

  ];

  itemList1 = [
    {
      title: 'DAILY NEEDS',
      content1: 'Grocery',
      content2: 'Chemists',
      content3: 'TBakery',
      content4: 'more..',
      imageLink: "../../assets/image/img3.JPG"
    },
    {
      title: 'DOCTORS',
      content1: 'Dentists',
      content2: 'Dermatologists',
      content3: 'ENT',
      content4: 'more..',
      imageLink: "../../assets/image/img4.JPG"
    }

  ];


  itemList2 = [
    {
      title: 'TRAVEL',
      content1: 'flights',
      content2: 'Bus',
      content3: 'Hotels',
      content4: 'more..',
      imageLink: "./../../assets/image/1.JPG"
    },
    {
      title: 'REPAIRS',
      content1: 'AC',
      content2: 'Laptop',
      content3: 'Mobile Phone',
      content4: 'more..',
      imageLink: "./../../assets/image/2.JPG"
    }

  ];

  itemList3 = [
    {
      title: 'LOANS',
      content1: 'Credit Cards',
      content2: 'Home Loans',
      content3: 'Personal Loans',
      content4: 'more..',
      imageLink: "./../../assets/image/3.JPG"
    },
    {
      title: 'AUTOMOBILES',
      content1: 'New Car',
      content2: 'Used Cars',
      content3: 'Car Insurance',
      content4: 'more..',
      imageLink: "./../../assets/image/4.JPG"
    }

  ];

  itemList4 = [
    {
      title: 'ON DEMAND SERVICES ',
      content1: 'Carpenters',
      content2: 'Electricians',
      content3: 'Plumbers',
      content4: 'more..',
      imageLink: "./../../assets/image/5.JPG"
    },
    {
      title: 'WEDDING',
      content1: 'Banquet Halls',
      content2: 'Bridal Requisites',
      content3: 'Caterers',
      content4: 'more..',
      imageLink: "./../../assets/image/6.JPG"
    }

  ];

  itemList5 = [
    {
      title: 'JOBS',
      content1: 'Placement Services',
      content2: 'Search Jobs',
      content3: 'Overseas Jobs',
      content4: 'more..',
      imageLink: "./../../assets/image/7.JPG"
    },
    {
      title: 'PERSONAL CARE',
      content1: 'Beauty Parlours',
      content2: 'Spas',
      content3: 'Salons',
      content4: 'more..',
      imageLink: "./../../assets/image/8.JPG"
    }

  ];

  itemList6 = [
    {
      title: 'REAL ESATE',
      content1: 'Buy',
      content2: 'Sell',
      content3: 'Residential Rental',
      content4: 'more..',
      imageLink: "./../../assets/image/9.JPG"
    },
    {
      title: 'FLOWERS',
      content1: 'Florists',
      content2: 'Flower Shops',
      content3: '24 Hour Florists',
      content4: 'more..',
      imageLink: "./../../assets/image/10.JPG"
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
