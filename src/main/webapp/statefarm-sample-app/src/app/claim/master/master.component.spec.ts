import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimMasterComponent } from './master.component';

describe('MasterComponent', () => {
    let component: ClaimMasterComponent;
    let fixture: ComponentFixture<ClaimMasterComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ClaimMasterComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ClaimMasterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
