import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2em',
    }
}
class Logo extends Component {
    render() {
        return(
            <div style={styles.logo}>
                SHOP
            </div>
        )
    }
}
export default Logo