export interface ButtonComponentProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color: string;
  loading: boolean;
}

export interface SearchComponentProps {
  text: string;
  setText: (newText: string) => void;
}

export interface IconButtonComponentProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color: string;
  iconName: string;
}

export interface ListItemComponentProps {
  status: string;
  title: string;
  refno: string;
  from: string;
  to: string;
}
