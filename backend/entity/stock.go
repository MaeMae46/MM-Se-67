package entity


import (

   "time"

   "gorm.io/gorm"

)

type Stock struct {

   gorm.Model

   ID        uint     `json:"id"`

   Price     float32    `json:"price"`

   QuantityInStock uint    `json:"quantity_in_stock"`

   Color  string    `json:"color"`

   ShapeSize:  string    `json:"shape_size"`

   Image string  `json:"image"`

   ProductID  uint      `json:"product_id"`

   Product    *Product  `gorm:"foreignKey: id" json:"product_id"`
}