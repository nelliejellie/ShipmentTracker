export interface ButtonComponentProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color: string;
  loading: boolean;
}
