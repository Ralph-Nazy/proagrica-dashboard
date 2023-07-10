import React from 'react';
import { RiHome4Line, RiTeamLine } from 'react-icons/ri';

//Menu List items
export const links = [
  {
    title: 'Dashboard',
    links: [
      
      {
        name: 'users',
        icon: <RiTeamLine  />,
      }
    ],
  }, 
]

//Test data for charts and graphs

export const saleStarts = [
    {
        title: "Total Sells",
        total: 24566
    },
    {
        title: "New Customers",
        total: 256
    },
    {
        title: "Total Orders",
        total: 1233666
    },
    {
        title: "Total Expenses",
        total: 1233666
    }
]
export const saleChart = [
    { name: 'Jan', sales: 30, orders: 20 },
    { name: 'Feb', sales: 40, orders: 25 },
    { name: 'Mar', sales: 45, orders: 30 },
    { name: 'Apr', sales: 50, orders: 35 },
    { name: 'May', sales: 49, orders: 40 },
    { name: 'Jun', sales: 60, orders: 45 },
    { name: 'Jul', sales: 70, orders: 50 },
    { name: 'Aug', sales: 91, orders: 55 },
    { name: 'Sep', sales: 125, orders: 60 },
    { name: 'Oct', sales: 150, orders: 65 },
    { name: 'Nov', sales: 160, orders: 70 },
    { name: 'Dec', sales: 200, orders: 75 },
  ]

  export const pieChart = [
    { name: 'Jan', sales: 30},
    { name: 'Feb', sales: 40},
    { name: 'Mar', sales: 45},
    { name: 'Apr', sales: 50},
    { name: 'May', sales: 49},
    { name: 'Jun', sales: 60},
    { name: 'Jul', sales: 70},
    { name: 'Aug', sales: 91},
    { name: 'Sep', sales: 125},
    { name: 'Oct', sales: 150},
    { name: 'Nov', sales: 160},
    { name: 'Dec', sales: 200},
  ]

  export const barChart = [
    { name: 'Jan', "sales": 30, 'orders': 20 },
    { name: 'Feb', "sales": 40, 'orders': 25 },
    { name: 'Mar', 'sales': 45, 'orders': 30 },
    { name: 'Apr', 'sales': 50, 'orders': 35 },
    { name: 'May', 'sales': 49, 'orders': 40 },
    { name: 'Jun', 'sales': 60, 'orders': 45 },
    { name: 'Jul', 'sales': 70, 'orders': 50 },
    { name: 'Aug', 'sales': 91, 'orders': 55 },
    { name: 'Sep', 'sales': 125, 'orders': 60 },
    { name: 'Oct', 'sales': 150, 'orders': 65 },
    { name: 'Nov', 'sales': 160, 'orders': 70 },
    { name: 'Dec', 'sales': 200, 'orders': 75 },
  ]

export const projectOverview = [
  {
    name: "Product Design",
    projects: 30,
    employees: 4
  },
  {
    name: "Web Development",
    projects: 14,
    employees: 10
  }
  ,
  {
    name: "UI/UX Design",
    projects: 7,
    employees: 3
  }
  ,
  {
    name: "API Development",
    projects: 17,
    employees: 10
  }
]