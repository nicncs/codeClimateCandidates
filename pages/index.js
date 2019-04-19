import "../polyfills";
import App from "./_app";
import { connect } from "react-redux";

class Index extends React.Component {
  render() {
    return <App />;
  }
}
export default connect()(Index);
