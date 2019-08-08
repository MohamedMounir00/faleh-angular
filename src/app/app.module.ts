import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from 'ng-select2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { Select2Module } from "ng-select2-component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './fronted/login/login.component';
import { UserRegistrationComponent } from './fronted/user-registration/user-registration.component';
import { ProviderRegistrationComponent } from './fronted/provider-registration/provider-registration.component';
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ProviderService } from './services/provider.service';
import { ShareService } from './services/share.service';
import { ChatService } from './services/chat.service';

import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { CategoriesService } from './services/categories.service';
import { OrderComponent } from './order/order.component';
import { AgmCoreModule } from '@agm/core';
import { OldordersComponent } from './oldorders/oldorders.component';
import { CurrentordersComponent } from './currentorders/currentorders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProvidersComponent } from './providers/providers.component';
import { OffersComponent } from './offers/offers/offers.component';
import { AcceptOfferComponent } from './offers/accept-offer/accept-offer.component';
import { AccpetOrderComponent } from './accpet-order/accpet-order.component';
import { RefusedOrderComponent } from './refused-order/refused-order.component';
import { GetUserConversationsComponent } from './chat/get-user-conversations/get-user-conversations.component';
import { GetMessagesComponent } from './chat/get-messages/get-messages.component';
import { SendMessagesComponent } from './chat/send-messages/send-messages.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MakeOfferComponent } from './offers/make-offer/make-offer.component';
import { UserProfileComponent } from './fronted/user-profile/user-profile.component';
import { ProviderProfileComponent } from './fronted/provider-profile/provider-profile.component';
import { UpdateUserComponent } from './fronted/update-user/update-user.component';
import { UpdateProviderComponent } from './fronted/update-provider/update-provider.component';
import { ReciptsComponent } from './recipts/recipts.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditOfferComponent } from './offers/edit-offer/edit-offer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Home2Component } from './home2/home2.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontendComponent } from './frontend/frontend.component';
import { AllSctionsComponent } from './all-sctions/all-sctions.component';
import { SupportComponent } from './support/support.component';
import { NewComponent } from './new/new.component';
import { RessetPasswordComponent } from './fronted/resset-password/resset-password.component';
import { PasswordRessetComponent } from './fronted/password-resset/password-resset.component';
import { CheckNumberComponent } from './fronted/check-number/check-number.component';
import { SubSctionsComponent } from './sub-sctions/sub-sctions.component';
import { TermsOfServiceComponent } from './settingShare/terms-of-service/terms-of-service.component';
import { HowItWorksComponent } from './settingShare/how-it-works/how-it-works.component';
import { StaffComponent } from './settingShare/staff/staff.component';
import { AboutFalehComponent } from './settingShare/about-faleh/about-faleh.component';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}
@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  UserRegistrationComponent,
  ProviderRegistrationComponent,
  HomeComponent,
  OrderComponent,
  OldordersComponent,
  CurrentordersComponent,
  OrderdetailsComponent,
  ProvidersComponent,
  OffersComponent,
  AcceptOfferComponent,
  AccpetOrderComponent,
  RefusedOrderComponent,
  GetUserConversationsComponent,
  GetMessagesComponent,
  SendMessagesComponent,
  MakeOfferComponent,
  UserProfileComponent,
  ProviderProfileComponent,
  UpdateUserComponent,
  UpdateProviderComponent,
  ReciptsComponent,
  AddIssueComponent,
  EditOfferComponent,
  Home2Component,
  SidebarComponent,
  NavbarComponent,
  FooterComponent,
  FrontendComponent,
  AllSctionsComponent,
  SupportComponent,
  NewComponent,
  RessetPasswordComponent,
  PasswordRessetComponent,
  CheckNumberComponent,
  SubSctionsComponent,
  TermsOfServiceComponent,
  HowItWorksComponent,
  StaffComponent,
  AboutFalehComponent,
  NoPermissionComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
   NgMultiSelectDropDownModule.forRoot(),
  FormsModule,
  NgxPaginationModule,
  Select2Module,
 NgSelect2Module,
  NgxSpinnerModule,
  NgbModule,
  NgbPaginationModule,
   NgbAlertModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  ReactiveFormsModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBROO3Md6_fZD5_fd1u8VTlRxd4VdJnAWU&libraries'
  })

  ],
  providers: [AuthService,ShareService,ProviderService,UserService,CategoriesService,ChatService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
