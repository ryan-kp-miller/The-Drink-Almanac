const PageHeader = ({ pageTitle, pageDescription, additionalDiv  }) => {

    return (
        <div className="container">
            <div className="drink-jumbo">
                <h2 className="text-center">{ pageTitle }</h2>
                {
                    pageDescription ?
                    <p className="text-center">{pageDescription}</p> :
                    undefined
                }
                {
                    additionalDiv ? 
                    additionalDiv : 
                    undefined
                }
            </div>
        </div>
    )
}

export default PageHeader