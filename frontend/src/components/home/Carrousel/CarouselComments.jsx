import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol } from
"mdbreact";

import '../../../css/carouselComments.css'

const CarouselComments = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner >
            <MDBCarouselItem itemId="1">
                <MDBView>
                    <MDBContainer>
                        <MDBRow className="my-5">
                            <MDBCol>
                                <div class="card" id="borderNone">
                                    <div class="view overlay">
                                        <img class="card-img-center pt-2" src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/30440868_1662985977142848_604677041249204553_n.jpg?_nc_cat=105&_nc_oc=AQnYgcrYqH1HZ5LSVKh93ViV_zHxYXD022CSYKVWcDnxGEm-RrEX4MB1QkHssrZBKxA&_nc_ht=scontent-gru1-1.xx&oh=7e39cb05a4ab013ecf3e1f4c420a5d17&oe=5E0445DA" alt="Card image cap"></img>
                                    </div>
                                    <div class="card-body text-center rounded-botton">
                                        <h4 class="card-title blue-text">Evelin Fausto</h4>
                                        <hr class="blue"></hr>
                                        <p class="card-text green-text mb-4">Esse programa é incrivel, alunos increveis, tudo é incrivel. O texto tem que ser grando para teste então estou usando aqui como exemplo, vou falar uns blá blá blá como hagatanga, lulamolusco bob espoja, filme de terror quarteto fantastico , banda dejavu, dj juninho porugal é show parara parara parara rarara rara</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                    <MDBContainer>
                        <MDBRow className="my-5">
                            <MDBCol>
                                <div class="card" id="borderNone">
                                    <div class="view overlay">
                                        <img class="card-img-center pt-2" src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/44757107_650014712067743_453947067883061248_n.jpg?_nc_cat=102&_nc_oc=AQkqxxqi0ShE5xc_i1epeGTRdZ4Pgm5RePSu9lEilbVDr8SPltvYZW599UvIR3wS05o&_nc_ht=scontent-gru1-1.xx&oh=e5d992761378ab64909fe195fa7d5ce8&oe=5E382F96" alt="Card image cap"></img>
                                    </div>
                                    <div class="card-body text-center rounded-botton">
                                        <h4 class="card-title blue-text">Murilo Rodrigues</h4>
                                        <hr class="blue"></hr>
                                        <p class="card-text green-text mb-4">Esse programa é incrivel, alunos increveis, tudo é incrivel.</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </MDBCarouselItem>
        </MDBCarouselInner>
        <MDBCarouselInner >
            <MDBCarouselItem itemId="3">
                <MDBView>
                    <MDBContainer>
                        <MDBRow className="my-5">
                            <MDBCol>
                                <MDBContainer className="w-100">
                                    <div class="card" id="borderNone">
                                        <div class="view overlay">
                                            <img class="card-img-center pt-2" src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/26815099_1335169356589288_4386191744653987917_n.jpg?_nc_cat=105&_nc_oc=AQkm6w7uSAMkIoNZFnTNL7OXkfOcjwa3Cg98ZC5PxLNFUSu3bH7xgnFR3s5HK-XJTpA&_nc_ht=scontent-gru1-1.xx&oh=e93d63c9d02299bddfc550e842dfca24&oe=5E3D1B72" alt="Card image cap"></img>
                                        </div>
                                        <div class="card-body text-center rounded-botton">
                                            <h4 class="card-title blue-text">Gustavo Possebon</h4>
                                            <hr class="blue"></hr>
                                            <p class="card-text green-text mb-4">Esse programa é incrivel, alunos increveis, tudo é incrivel.</p>
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