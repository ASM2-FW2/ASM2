import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-warning pb-0 ">
    <div className="site-section">
        <div className="container">
            <div className="row">
                <div className="col-md pr-md-5 mb-4 mb-md-0">
                    <h3>About Us</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde
                        facere repellendus, odio et iste voluptatum aspernatur ratione mollitia tempora eligendi
                        maxime est, blanditiis accusamus. Incidunt, aut, quis!</p>
                    <ul className="list-unstyled quick-info mb-4">
                        <li><a href="#" className="d-flex align-items-center"><span className="icon mr-3 icon-phone"></span>
                                +1 291 3912 329</a></li>
                        <li><a href="#" className="d-flex align-items-center"><span className="icon mr-3 icon-envelope"></span>
                                info@gmail.com</a></li>
                    </ul>

                    <form action="#" className="subscribe">
                        <input type="text" className="form-control" placeholder="Enter your e-mail"/>
                        <input type="submit" className="btn btn-submit" value="Send"/>
                    </form>
                </div>
                <div className="col-md mb-4 mb-md-0">
                    <h3>Latest Tweet</h3>
                    <ul className="list-unstyled tweets">
                        <li className="d-flex">
                            <div className="mr-4"><span className="icon icon-twitter"></span></div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam
                                porro excepturi.</div>
                        </li>
                        <li className="d-flex">
                            <div className="mr-4"><span className="icon icon-twitter"></span></div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam
                                porro excepturi.</div>
                        </li>
                        <li className="d-flex">
                            <div className="mr-4"><span className="icon icon-twitter"></span></div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam
                                porro excepturi.</div>
                        </li>
                    </ul>
                </div>


                <div className="col-md-3 mb-4 mb-md-0">
                    <h3>hi s jasb bạbd djqdb</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique asperiores velit neque
                        illum saepe vel recusandae rem fugit. Consectetur molestias voluptas itaque laudantium
                        temporibus sit, incidunt inventore a atque?</p>
                </div>



                <div className="col-12">
                    <div className="py-5 footer-menu-wrap d-md-flex align-items-center">
                        <ul className="list-unstyled footer-menu mr-auto">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Our works</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                        <div className="site-logo-wrap ml-auto">
                            <a href="#" className="site-logo">
                                Colorlib
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer