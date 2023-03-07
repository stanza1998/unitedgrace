import react from "react"
import "./footer.scss"




export const Footer = () => {
    return (
        <div className="footer">
            <link href='//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />

            <footer id='social-footer'>
                <ul>


                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Linkedin" data-placement="top" href="https://www.linkedin.com/in/" target="_blank"><i className="fa fa-linkedin-square fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Twitter" data-placement="top" href="https://twitter.com/" target="_blank"><i className="fa fa-twitter-square fa-stack-2x"></i></a>
                    </li>
                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Facebook" data-placement="top" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-square fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Google+" data-placement="top" href="https://plus.google.com//posts/p/pub?hl=en" target="_blank"><i className="fa fa-google-plus-square fa-stack-2x"></i></a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}