const setProductName = (productName, productId) => {
	return {
		type: "SET_PRODUCT_NAME",
		payload: {
			productName,
			productId
		}
	}
}

const setProductNumber = (productNumber, productId) => {
	return {
		type: "SET_PRODUCT_NUMBER",
		payload: {
			productNumber,
			productId
		}
	}
}

const setProductDescription = (productDescription, productId) => {
	return {
		type: "SET_PRODUCT_DESCRIPTION",
		payload: {
			productDescription,
			productId
		}
	}
}

const setVisible = (productId) => {
	return {
		type: "SET_PRODUCT_VISIBLE",
		payload: productId
	}
}

const setProductImageName = (imageName, productId, imageId) => {
	return {
		type: "SET_PRODUCT_IMAGE_NAME",
		payload: {
			imageName,
			productId,
			imageId
		}
	}
}

const setProductImageUrl = (imageUrl, productId, imageId) => {
	return {
		type: "SET_PRODUCT_IMAGE_URL",
		payload: {
			imageUrl,
			productId,
			imageId
		}
	}
}

export default {
	setProductName,
	setProductNumber,
	setProductDescription,
	setVisible,
	setProductImageName,
	setProductImageUrl,
}
