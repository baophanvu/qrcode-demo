import { Component } from '@angular/core';
import { NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'jhi-qa',
    templateUrl: './qa.component.html',
    styleUrls: [
        'qa.css'
    ]
})
export class QAComponent {
    num = 6;
    closeResult: string;
    modal_content: string;
    result: boolean;

    // audio player
    // a = new Audio();
    // hasAudio = false;
    // show pdf
    pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

    constructor(private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    rightAnswerClick(content) {
        // console.log('value');
        this.modal_content = 'You are correct!';
        this.result = true;
        // this.hasAudio = true;
        this.modalService.open(content, { windowClass: 'custom-class' });
        // eval("window.document.getElementsByTagName('ngb-modal-backdrop')[0].style.backgroundColor = 'blue'");
        // eval("window.document.getElementsByTagName('ngb-modal-backdrop')[0].style.backgroundImage = 'url('http://www.fnordware.com/superpng/pnggrad16rgb.png')'");
    }

    wrongAnswerClick(content) {
        this.modal_content = 'You are wrong!';
        this.result = false;
        // this.hasAudio = false;
        this.modalService.open(content);
    }

    onClickNext(isNext: boolean) {
        if (isNext === true) {
            this.num++;
        }
    }

    getQRCodeQuestion() {
        this.num++;
    }

    // playAudio() {
    //     // this.a.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    //     this.a.src = 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20single%20samples/bells/353[kb]belltree.aif.mp3';
    //     this.a.load();
    //     this.a.play();
    // }
    // pauseAudio() {
    //     this.a.pause();
    // }

    // timer countdown
    onStartFunc(data) {
        console.log(data);
    }
    onCompleteFunc(data) {
        console.log(data);
        // alert("complete!");
    }

}
