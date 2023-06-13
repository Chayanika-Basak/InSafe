// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const productData = [
  {
    _id: 101,
    title: "Sofy Sanitary Napkins",
    description: "Soft Napkins with Full Coverage and leak proof",
    oldPrice: 280,
    Price: 250,
    branc: "Sofy",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/K42278/sofy-antibacteria-overnight-xxl-sanitary-pads-5-pads-2-1671742299.jpg",
    isNew: false,
    category: ["women","sanitary napkin","hygiene"],
  },
  {
    _id: 102,
    title: "Sofy Sanitary Napkins",
    description: "Soft Napkins with Full Coverage and leak proof",
    oldPrice: 280,
    Price: 250,
    branc: "Sofy",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/K42278/sofy-antibacteria-overnight-xxl-sanitary-pads-5-pads-2-1671742299.jpg",
    isNew: false,
    category: ["women","sanitary napkin","hygiene"],
  },
  {
    _id: 103,
    title: "Sofy Sanitary Napkins",
    description: "Soft Napkins with Full Coverage and leak proof",
    oldPrice: 280,
    Price: 250,
    branc: "Sofy",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/K42278/sofy-antibacteria-overnight-xxl-sanitary-pads-5-pads-2-1671742299.jpg",
    isNew: false,
    category: ["women","sanitary napkin","hygiene"],
  }
];

export default function handler(req, res) {
  res.status(200).json(productData);
}
