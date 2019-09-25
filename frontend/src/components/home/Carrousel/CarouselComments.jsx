/* All librarys */
import React from "react";

/* Components */
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdbreact";

/* CSS */
import '../../../css/carouselComments.css'

/* Images */
import alexandra from '../../../images/carousel/alexandra.jpg'
import alexandre from '../../../images/carousel/alexandre.jpg'
import douglas from '../../../images/carousel/douglas.jpg'
import possebon from '../../../images/carousel/possebon.jpg'
import guilherme from '../../../images/carousel/guilherme.jpg'
import gustavo from '../../../images/carousel/gustavo.jpg'
import jaqueline from '../../../images/carousel/jaqueline.jpg'
import jonas from '../../../images/carousel/jonas.jpg'
import lucas from '../../../images/carousel/lucas.jpg'
import murilo from '../../../images/carousel/murilo.jpg'
import evelin from '../../../images/carousel/evelin.jpg'

const CarouselComments = () => {
    return (
        <MDBContainer id="container100">
            <MDBCarousel
                activeItem={1}
                length={11}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                id="caro"
            >
                <MDBCarouselInner className="mb-5">
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <MDBRow className="my-5 ">
                                <MDBCol className="text-center">
                                    <div className="cardizinho" id="borderNone">
                                        <div className="view overlay">
                                            <img className="card-img-center pt-2" src={evelin} alt="img-fail"></img>
                                        </div>
                                        <div id="msg" className="text-center">
                                            <h4 className="card-title white-text">Evelin Fausto</h4>
                                            <p className="card-text white-text mt-4 mb-2">Eu queria muito entrar na area de desenvolvimento e a DBC me deu essa oportunidade, participar do projeto VemSerDBC, o vemser me mostrou muito principalmente como é trabalhar em equipe, quais ferramentas se usam oque e como é começar um projeto e ir até o fim, então eu tenho só a agradecer. Obrigada pela oportunidade de participar desse projeto incrível, e parabéns por dar essa oportunidade a todos que estão iniciando. </p>
                                        </div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <div className="cardizinho" id="borderNone">
                                            <div className="view overlay">
                                                <img className="card-img-center pt-2" src={murilo} alt="img-fail"></img>
                                            </div>
                                            <div id="msg" className="text-center">
                                                <h4 className="card-title white-text">Murilo Rodrigues</h4>
                                                <p className="card-text white-text mt-4 mb-2">O projeto é incrível, nestes 3 meses de treinamento aprendi muito. Muito obrigado pela grande oportunidade DBC! </p>
                                            </div>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5 ">
                                    <MDBCol>
                                        <div className="cardizinho" id="borderNone">
                                            <div className="view overlay">
                                                <img className="card-img-center pt-2" src={alexandre} alt="img-fail"></img>
                                            </div>
                                            <div id="msg" className="text-center">
                                                <h4 className="card-title white-text">Alexandre Viegas Betti</h4>
                                                <p className="card-text white-text mt-4 mb-2">"Quero agradecer à equipe DBC e ao Programa Vem Ser pela oportunidade de aprendizado, conhecimento e desenvolvimento profissional. Além do conhecimento técnico que praticamos durante a capacitação, aprendemos também significado do trabalho em equipe, possibilitando o crescimento pessoal e profissional."</p>
                                            </div>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={possebon} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Gustavo Possebon</h4>
                                                    <p className="card-text white-text mt-4 mb-2">"A oportunidade que este programa oferece é uma forma de aprendizado e ingresso a este tipo de mercado de trabalho. Agradeço a toda empresa por todo suporte e conhecimento apresentados durante todo programa, colocados sempre em prática."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="5+">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={alexandra} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Alexandra Peres</h4>
                                                    {/* <hr className="white"></hr> */}
                                                    <p className="card-text white-text mt-4 mb-2">"Sempre tive o sonho de trabalhar desenvolvendo software e consegui realizar esse sonho atravéz do projeto VemSerDBC. Esses 3 meses de aprendizado foram incríveis tanto para minha vida pessoal quando profissional. Ter todo o aprendizado, apoio e confiança proporcionados pela empresa me motivou a amar ainda mais a tecnologia e continua me motivando todos os dias."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="6">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={jaqueline} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Jaqueline Paz</h4>
                                                    {/* <hr className="white"></hr> */}
                                                    <p className="card-text white-text mt-4 mb-2">"O Programa Vem Ser surgiu na minha vida no momento certo! A possibilidade de estar totalmente dedicada a este treinamento dentro da DBC me trouxe a evolução profissional e segurança que precisava para entrar no mercado de TI. Sou muito grata por estar entre os selecionados."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="7">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={douglas} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Douglas Marques</h4>
                                                    {/* <hr className="white"></hr> */}
                                                    <p className="card-text white-text mt-4 mb-2">"VemSerDBC está sendo uma experiência incrível para mim. Estar conectado com o mercado de trabalho, com tecnologias atuais mas mais do que isso, ter a oportunidade de construir minha carreira em todos os seus aspectos, isso tudo com o baita suporte de uma organização com o selo de qualidade que a DBC tem, faz esse processo ser único e muito impactante para todos nós envolvidos."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="8">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={guilherme} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Guilherme Borges</h4>
                                                    <p className="card-text white-text mt-4 mb-2">"O programa VemSerDBC foi a melhor experiência de capacitação que eu já vivi. Isso só foi possível graças aos facilitadores do projeto. Desde o início apresentaram uma imensa consideração pelos integrantes da nossa turma e uma excepcional disposição em compartilhar conhecimento. Portanto quero agradecer a DBC por proporcionar essa experiência."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="9">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={jonas} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Jonas Cruz</h4>
                                                    <p className="card-text white-text mt-4 mb-2">"Uma empresa que dá a oportunidade de obter aprendizado, capacitação e introdução no mercado de trabalho, através de um programa para estudantes sem ou com pouca experiência na área da tecnologia. Essa é a DBC Company, esse é o VemSer DBC. Empresa que investe em pessoas visando qualidade, bem estar e futuro. Eu como aluno do VemSer serei eternamente grato pela oportunidade."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="10">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={lucas} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Lucas Ribeiro</h4>
                                                    <p className="card-text white-text mt-4 mb-2">"O programa VemSerDbc tem sido uma otima oportunidade de crescimento e aprendizado, tanto profissional quanto pessoal. Estar próximo de profissionais qualificados e dedicados tem um impacto muito positivo no nosso desenvolvimento. É uma experiencia única, proporcionada por uma das melhores empresas para se trabalhar no brasil."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="11">
                        <MDBView>
                            <MDBContainer>
                                <MDBRow className="my-5">
                                    <MDBCol>
                                        <MDBContainer className="w-100">
                                            <div className="cardizinho" id="borderNone">
                                                <div className="view overlay">
                                                    <img className="card-img-center pt-2" src={gustavo} alt="img-fail"></img>
                                                </div>
                                                <div id="msg" className="text-center">
                                                    <h4 className="card-title white-text">Gustavo Comaru</h4>
                                                    <p className="card-text white-text mt-4 mb-2">"O VemSer tem sido pra mim uma grande oportunidade de aprendizagem técnica e pessoal, me colocando em contato com um mundo que eu não conhecia e mudando minha perspectiva sobre o trabalho com TI. É uma experiência muito enriquecedora que vou levar comigo para o resto da vida."</p>
                                                </div>
                                            </div>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBView>
                    </MDBCarouselItem>

                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>


    );
}

export default CarouselComments;