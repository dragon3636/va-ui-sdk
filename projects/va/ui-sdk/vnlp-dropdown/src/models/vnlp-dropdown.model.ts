export interface DropDownSetting {
  singleSelection?: boolean,
  allowSearchFilter?: boolean,
}

export interface ItemSelected {
  id: number,
  value: string,
  isSelected?: boolean
}