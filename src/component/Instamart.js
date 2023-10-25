import { useState } from "react"

const Mart = ({ header, description, updater, Show }) => {

    return (
        <div className="container mt-2" >
            <div>
                <h3 className="border border-primary p-2 rounded">{header}</h3>
                <div onClick={updater} type="button" className="btn btn-primary">{Show ? 'hide' : 'show'}</div>
            </div>

            {Show ? <p>{description}</p> : ''}
        </div>
    )
}

const Instamart = () => {
    const [isActive, setActive] = useState('1');
    return (
        <div>
            <h1> This is Instamart Component</h1>

            <Mart header='Team Component'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sem sit amet aliquet aliquam. Mauris sed sapien auctor, sollicitudin dui at, volutpat nibh. Ut pellentesque aliquam ipsum, non tempor nunc pharetra interdum. Suspendisse potenti. Aenean feugiat sagittis ullamcorper. Fusce et lacus lacinia, fringilla metus nec, rutrum odio. Integer eget vestibulum turpis. Phasellus vitae nulla id libero blandit mattis. Proin ut fringilla nibh. Curabitur malesuada dui id lorem convallis scelerisque. Praesent egestas tortor elementum maximus commodo.'
                Show={isActive === '1'}
                updater={() => { isActive === '1' ? setActive('0') : setActive('1') }}
            />

            <Mart header='Testimonial Component'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sem sit amet aliquet aliquam. Mauris sed sapien auctor, sollicitudin dui at, volutpat nibh. Ut pellentesque aliquam ipsum, non tempor nunc pharetra interdum. Suspendisse potenti. Aenean feugiat sagittis ullamcorper. Fusce et lacus lacinia, fringilla metus nec, rutrum odio. Integer eget vestibulum turpis. Phasellus vitae nulla id libero blandit mattis. Proin ut fringilla nibh. Curabitur malesuada dui id lorem convallis scelerisque. Praesent egestas tortor elementum maximus commodo.'
                Show={isActive === '2'}
                updater={() => { isActive === '2' ? setActive('0') : setActive('2') }}
            />

            <Mart header='Product Component'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sem sit amet aliquet aliquam. Mauris sed sapien auctor, sollicitudin dui at, volutpat nibh. Ut pellentesque aliquam ipsum, non tempor nunc pharetra interdum. Suspendisse potenti. Aenean feugiat sagittis ullamcorper. Fusce et lacus lacinia, fringilla metus nec, rutrum odio. Integer eget vestibulum turpis. Phasellus vitae nulla id libero blandit mattis. Proin ut fringilla nibh. Curabitur malesuada dui id lorem convallis scelerisque. Praesent egestas tortor elementum maximus commodo.'
                Show={isActive === '3'}
                updater={() => { isActive === '3' ? setActive('0') : setActive('3') }}
            />
        </div>
    )
}

export default Instamart;