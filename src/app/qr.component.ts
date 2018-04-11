import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import Result from '@zxing/library/esm5/core/Result';
import { log } from 'util';

@Component({
  selector: 'qr-component',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent {
    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

    hasCameras = false;
    qrResultString: string;
    qrResult: Result;
    scannerEnabled = true;
    autofocusEnabled = true;
    title = 'QR Scan App';

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;
    router;

    ngOnInit(): void {
        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;

            // // selects the devices's back camera by default
            // for (const device of devices) {
            //     if (/back|rear|environment/gi.test(device.label)) {
            //         this.scanner.changeDevice(device);
            //         this.selectedDevice = device;
            //         break;
            //     }
            // }
        });

        this.scanner.scanComplete.subscribe((result: Result) => {
            this.qrResult = result;
            if (this.qrResult.getText.length > 0) {
                this.goToQAComponent();
            }
        });

    }

    displayCameras(cameras: MediaDeviceInfo[]) {
        console.log('Devices: ', cameras);
        this.availableDevices = cameras;
    }

    handleQrCodeResult(resultString: string) {
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }

    goToQAComponent() {
       window.location.href = '/qa';
    }

    onChange(event){}
}
