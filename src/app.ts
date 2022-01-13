import './app.scss';

declare type AppProps = Readonly<{}> & Readonly<{ children?: React.ReactNode }>;

const App = (props: AppProps) => props.children;

export default App;
