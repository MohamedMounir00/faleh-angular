
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './fronted/login/login.component';
import { UserRegistrationComponent } from './fronted/user-registration/user-registration.component';
import { ProviderRegistrationComponent } from './fronted/provider-registration/provider-registration.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OldordersComponent } from './oldorders/oldorders.component';
import { CurrentordersComponent } from './currentorders/currentorders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProvidersComponent } from './providers/providers.component';
import { OffersComponent } from './offers/offers/offers.component';
import { AccpetOrderComponent } from './accpet-order/accpet-order.component';
import { RefusedOrderComponent } from './refused-order/refused-order.component';
import { GetUserConversationsComponent } from './chat/get-user-conversations/get-user-conversations.component';
import { GetMessagesComponent } from './chat/get-messages/get-messages.component';
import { MakeOfferComponent } from './offers/make-offer/make-offer.component'
import { UserProfileComponent } from './fronted/user-profile/user-profile.component';
import { ProviderProfileComponent } from './fronted/provider-profile/provider-profile.component'
import { UpdateUserComponent } from './fronted/update-user/update-user.component';
import { UpdateProviderComponent } from './fronted/update-provider/update-provider.component'
import { ReciptsComponent } from './recipts/recipts.component'
import { AddIssueComponent } from './add-issue/add-issue.component'
import { EditOfferComponent } from './offers/edit-offer/edit-offer.component';
import { AllSctionsComponent } from './all-sctions/all-sctions.component';
import { SupportComponent } from './support/support.component';
import { RessetPasswordComponent } from './fronted/resset-password/resset-password.component';
import { PasswordRessetComponent } from './fronted/password-resset/password-resset.component';
import { CheckNumberComponent } from './fronted/check-number/check-number.component';
import { SubSctionsComponent } from './sub-sctions/sub-sctions.component';
import { TermsOfServiceComponent } from './settingShare/terms-of-service/terms-of-service.component';
import { HowItWorksComponent } from './settingShare/how-it-works/how-it-works.component';
import { StaffComponent } from './settingShare/staff/staff.component';
import { AboutFalehComponent } from './settingShare/about-faleh/about-faleh.component';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import { AuthGuard } from './auth.guard';
import { Auth2Guard } from './auth2.guard';

import { AcceptOfferComponent } from './offers/accept-offer/accept-offer.component';

const routes: Routes = [
	{path:'login',component:LoginComponent},
	{path:'user-registration',component:UserRegistrationComponent},
	{path:'provider-registration',component:ProviderRegistrationComponent},
	{path:'home',component:HomeComponent},


{ path: 'new-order/:id', component: OrderComponent , pathMatch: 'full' , canActivate: [AuthGuard]},

//	{path:'new-order/:id',component:OrderComponent},
	{path:'old-orders',component:OldordersComponent},
	{path:'current-orders',component:CurrentordersComponent},
	{path:'order-details/:id',component:OrderdetailsComponent},
	{path:'get-providers',component:ProvidersComponent},
	{path:'get-offers/:id',component:OffersComponent},
		{path:'accept-offers/:id',component:AcceptOfferComponent},

	{path:'accept-order/:id',component:AccpetOrderComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
	{path:'refused-order/:id',component:RefusedOrderComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
	{path:'user-conversation',component:GetUserConversationsComponent},
	{path:'get-messages/:id',component:GetMessagesComponent},
	{path:'make-offer/:id',component:MakeOfferComponent, pathMatch: 'full' , canActivate: [Auth2Guard]},
	{path:'user-profile/:id',component:UserProfileComponent},
	{path:'provider-profile',component:ProviderProfileComponent},
	{path:'update-user/:id',component:UpdateUserComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
	{path:'update-provider/:id',component:UpdateProviderComponent, pathMatch: 'full' , canActivate: [Auth2Guard]},
	{path:'recipts/:id',component:ReciptsComponent},
	{path:'add-issue/:id',component:AddIssueComponent},
	{path:'edit-offer/:id',component:EditOfferComponent, pathMatch: 'full' , canActivate: [Auth2Guard]},
	{path:'all-sections',component:AllSctionsComponent},
	{path:'support',component:SupportComponent},
	{path:'resset-password',component:RessetPasswordComponent},
	{path:'password-resset',component:PasswordRessetComponent},
	{path:'check',component:CheckNumberComponent},
	{path:'sub-sctions/:id',component:SubSctionsComponent},
	{path:'',component:CurrentordersComponent},
	{path:'staff',component:StaffComponent},
	{path:'how-it-works',component:HowItWorksComponent},
	{path:'terms-of-service',component:TermsOfServiceComponent},

	{path:'support-home',component:SupportComponent},

		{path:'staff-home',component:StaffComponent},
	{path:'how-it-works-home',component:HowItWorksComponent},
	{path:'terms-of-service-home',component:TermsOfServiceComponent},
	{path:'about-faleh-home',component:AboutFalehComponent},
	{path:'about-faleh',component:AboutFalehComponent},
	{path:'no-permission',component:NoPermissionComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
