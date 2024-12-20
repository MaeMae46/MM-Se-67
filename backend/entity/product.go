package entity


import (

   "time"

   "gorm.io/gorm"

)

type Product struct {

   gorm.Model

   ID        uint     `json:"id"`

   Name     string    `json:"name"`

   Description string    `json:"description"`

   Quantity  uint    `json:"quantity"`

   Image  string    `json:"image"`

   UserID  uint      `json:"user_id"`

   User    *User  `gorm:"foreignKey: id" json:"user_id"`

   CatagoryID  uint      `json:"catagory_id"`

   Catagory    *Catagory  `gorm:"foreignKey: id" json:"catagory_id"`
}