import React from 'react';
import './CheckoutPage.css';
import holographicTomato from '/img/tomateHolografico.png';

function CheckoutPage_address() {
    return (
        <section className='checkout-wrapper'>
            <div className='col'>
                <div className='form-wrapper'>
                    <form>
                        <h1 className='primary-title'>Checkout</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <div className='form-group row'>
                                <input type="number" min={1} max={12} maxLength={2} className="form-control" id="mes" placeholder="Mês" />
                                <input type="number" min={1} max={31} maxLength={2} className="form-control" id="dia" placeholder="Dia" />
                                <input type="number" min={1} max={999} maxLength={3} className="form-control" id="cvv" placeholder="CVV" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Nome Cartão de Crédito</label>
                            <input type="text" className="form-control" id="nameCreditCard" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <div className='form-check'>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Eu concordo com os <span className='form-check-label link'>Termos e Condições</span></label>
                            </div>
                            <button type="submit" className="btn btn-primary">Encomendar</button>
                        </div>    
                    </form>
                </div>
            </div>
            <div className='col bg-primary'>
                <img src={holographicTomato} alt='Tomate holográfico'></img>
            </div>
        </section>
    )
    
}

export default CheckoutPage_address;