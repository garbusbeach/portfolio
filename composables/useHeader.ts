export type Header = {
  title: string;
  anchor: string;
}

const emptyHeader = { title: '', anchor: '' };

export const useHeader = () => {
  return useState<Header>('currentHeader', () => emptyHeader);
};
