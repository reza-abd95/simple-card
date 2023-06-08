import './Btn.css';

const Btn = ({link , btntxt}) =>{
    return(
        <>
            <a className='btn' href={link}>{btntxt}</a>
        </>
    )

    
}

export default Btn;