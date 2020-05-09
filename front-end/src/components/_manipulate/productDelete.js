import React from 'react'
import PropTypes from 'prop-types'

class DeleteProduct extends React.Component{
    
    componentDidMount(){
        if (!this.props.product_id) {
            throw new Error('Product Id must be specified first')
        }
    }
    
    render(){
        return(
            <h3>Product ID</h3>
        )
    }
}

DeleteProduct.propTypes = {
    product_id:PropTypes.string.isRequired
}

export default DeleteProduct