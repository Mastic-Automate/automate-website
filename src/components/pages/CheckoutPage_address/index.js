import React from 'react';
import RenderLinks from '../../Header/RenderLinks';
import './CheckoutPage_address.css';
import holographicTomato from '../../../img/tomateHolografico.png';

function CheckoutPage_address() {
    return (
        <section className='checkout-wrapper'>
            <div className='col'>
                <div className='form-wrapper'>
                    <form>
                        <h1 className='primary-title'>Checkout</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">CEP</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="00000-000" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Cidade</label>
                            <div className='form-group row'>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Bairro</label>
                            <div className='form-group row'>
                                <input type="text" min={1} className="form-control" id="mes" placeholder="Rua" />
                                <input type="text" min={1} className="form-control" id="dia" placeholder="Número" />
                                <input type="text" min={1}  className="form-control" id="cvv" placeholder="Complemento" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div href="#" className='btn primary-btn'>
                                <RenderLinks links={[{link: '/checkoutPage_address', linkName:'COMPRE AQUI'}]}/>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>
            <div className='col bg-primary'>
                <img src={holographicTomato}></img>
            </div>
        </section>
    )
    
}

export default CheckoutPage_address;