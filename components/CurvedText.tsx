import ReactCurvedText from 'react-curved-text';

const CurvedText = () => {
    return (
        <ReactCurvedText 
        width={342}
        height={321}
        cx={173}
        cy={357}
        rx={100}
        ry={100}
        startOffset={4}
        reversed={true}
        text='react-curved-text'
        textProps={{"style": {"fontSize": "26"}}}
        textPathProps={undefined}
        tspanProps={{"dy": "-9"}}
        ellipseProps={undefined}
        svgProps={{"style": {"transform": "rotate(0deg)"}}} />
    );
};

export default CurvedText;