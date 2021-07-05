import { Card } from 'react-bootstrap'

const PageIntroCard = ({ pageName, pageDescription, pageUrl }) => {
    return (
        <Card className="page-intro-card">
            <Card.Body>
                <Card.Title>{pageName}</Card.Title>
                <Card.Text>{pageDescription}</Card.Text>
                <Card.Link href={pageUrl}>Go to {pageName}</Card.Link>
            </Card.Body>
        </Card>
    )
}


export default PageIntroCard