export interface DropDownSetting {
  singleSelection?: boolean,
  allowSearchFilter?: boolean,
  placeholder?: string,
  dropdownWidth?: string
}

export interface ItemSelected {
  id: number,
  value: string,
  isSelected?: boolean
}