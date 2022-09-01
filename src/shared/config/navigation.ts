export interface NavItem{
  url: string;
  label: string;
  icon: string;
  opened?: boolean;
  items?: NavChildItem[];
}

interface NavChildItem{
    url: string;
    label: string;
}

export const navigation: NavItem[] = [
  {
    url: '',
    label: 'Home',
    icon: ''
  }
]
