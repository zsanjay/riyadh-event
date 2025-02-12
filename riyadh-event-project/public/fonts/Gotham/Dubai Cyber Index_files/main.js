import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");import {
  PrivateNavigationRoutes,
  PublicNavigationRoutes
} from "/chunk-FWVF44QN.js";
import "/chunk-EVSPGG2W.js";

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_platform-browser.js?v=665e146a";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_core.js?v=665e146a";
import { provideRouter } from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_router.js?v=665e146a";

// src/app/app.routes.ts
var routes = [
  /* Login */
  {
    path: "",
    redirectTo: PublicNavigationRoutes.loginRoute,
    pathMatch: "full"
  },
  {
    path: "",
    loadComponent: () => import("/login-layout.component-OD3A46KO.js").then((c) => c.LoginLayoutComponent),
    loadChildren: () => [{
      path: PublicNavigationRoutes.loginRoute,
      loadComponent: () => import("/login.component-JVMDQQQ2.js").then((c) => c.LoginComponent)
    }]
  },
  /* Main Routes*/
  {
    path: "",
    loadComponent: () => import("/main-layout.component-TWSQWTFB.js").then((c) => c.MainLayoutComponent),
    loadChildren: () => [
      {
        // Entities
        path: PrivateNavigationRoutes.entitiesRoute,
        loadComponent: () => import("/entities-page.component-N6DCQZW2.js").then((c) => c.EntitiesPageComponent)
      },
      {
        // Entity-Products
        path: PrivateNavigationRoutes.entitiesRoute,
        loadComponent: () => import("/entity-products-page.component-KNQWDWDM.js").then((c) => c.EntityProductsPageComponent)
      }
    ]
  }
];

// src/app/app.config.ts
import { provideHttpClient } from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_common_http.js?v=665e146a";
var appConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};

// src/app/app.component.ts
import { Component } from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_core.js?v=665e146a";
import { RouterOutlet } from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_router.js?v=665e146a";
import * as i0 from "/@fs/Users/priyankaprakash/Documents/DESC/Projects/CSI/csi-25/website/.angular/cache/19.1.3/csi/vite/deps/@angular_core.js?v=665e146a";
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "csi";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();
(() => {
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=src%2Fapp%2Fapp.component.ts%40AppComponent&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(AppComponent, m.default, [i0], [RouterOutlet]));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === "src%2Fapp%2Fapp.component.ts%40AppComponent" && AppComponent_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwQXBwbGljYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4vYXBwL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvYXBwLmNvbXBvbmVudCc7XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCwgYXBwQ29uZmlnKVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlnLCBwcm92aWRlWm9uZUNoYW5nZURldGVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZVJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW3Byb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLCBwcm92aWRlUm91dGVyKHJvdXRlcyksIHByb3ZpZGVIdHRwQ2xpZW50KCldXG59O1xuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByaXZhdGVOYXZpZ2F0aW9uUm91dGVzLCBQdWJsaWNOYXZpZ2F0aW9uUm91dGVzIH0gZnJvbSAnLi9zaGFyZWQvdXRpbGl0aWVzL3JvdXRlcy11dGlsJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIC8qIExvZ2luICovXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgcmVkaXJlY3RUbzogUHVibGljTmF2aWdhdGlvblJvdXRlcy5sb2dpblJvdXRlLFxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvcmUvbGF5b3V0cy9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudCcpLnRoZW4oYyA9PiBjLkxvZ2luTGF5b3V0Q29tcG9uZW50KSxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBbe1xuICAgICAgICAgICAgcGF0aDogUHVibGljTmF2aWdhdGlvblJvdXRlcy5sb2dpblJvdXRlLFxuICAgICAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2NvcmUvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JykudGhlbihjID0+IGMuTG9naW5Db21wb25lbnQpLFxuICAgICAgICB9XVxuICAgIH0sXG4gICAgLyogTWFpbiBSb3V0ZXMqL1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9jb3JlL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50JykudGhlbihjID0+IGMuTWFpbkxheW91dENvbXBvbmVudCksXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gW3tcbiAgICAgICAgICAgIC8vIEVudGl0aWVzXG4gICAgICAgICAgICBwYXRoOiBQcml2YXRlTmF2aWdhdGlvblJvdXRlcy5lbnRpdGllc1JvdXRlLFxuICAgICAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2ZlYXR1cmVzL2Rhc2hib2FyZC9wYWdlcy9lbnRpdGllcy1wYWdlL2VudGl0aWVzLXBhZ2UuY29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAudGhlbihjID0+IGMuRW50aXRpZXNQYWdlQ29tcG9uZW50KVxuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gRW50aXR5LVByb2R1Y3RzXG4gICAgICAgICAgICBwYXRoOiBQcml2YXRlTmF2aWdhdGlvblJvdXRlcy5lbnRpdGllc1JvdXRlLFxuICAgICAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2ZlYXR1cmVzL2Rhc2hib2FyZC9wYWdlcy9lbnRpdHktcHJvZHVjdHMtcGFnZS9lbnRpdHktcHJvZHVjdHMtcGFnZS5jb21wb25lbnQnKVxuICAgICAgICAgICAgICAgIC50aGVuKGMgPT4gYy5FbnRpdHlQcm9kdWN0c1BhZ2VDb21wb25lbnQpXG4gICAgIH1dXG4gICAgfVxuXTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICBpbXBvcnRzOiBbUm91dGVyT3V0bGV0XSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hcHAuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ2NzaSc7XG59XG4iLCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QixrQ0FBa0M7QUFDOUQsU0FBUyxxQkFBcUI7OztBQ0V2QixJQUFNLFNBQWlCOztFQUUxQjtJQUNJLE1BQU07SUFDTixZQUFZLHVCQUF1QjtJQUNuQyxXQUFXOztFQUVmO0lBQ0ksTUFBTTtJQUNOLGVBQWUsTUFBTSxPQUFPLHNDQUFvRCxFQUFFLEtBQUssT0FBSyxFQUFFLG9CQUFvQjtJQUNsSCxjQUFjLE1BQU0sQ0FBQztNQUNqQixNQUFNLHVCQUF1QjtNQUM3QixlQUFlLE1BQU0sT0FBTywrQkFBb0MsRUFBRSxLQUFLLE9BQUssRUFBRSxjQUFjO0tBQy9GOzs7RUFHTDtJQUNJLE1BQU07SUFDTixlQUFlLE1BQU0sT0FBTyxxQ0FBa0QsRUFBRSxLQUFLLE9BQUssRUFBRSxtQkFBbUI7SUFDL0csY0FBYyxNQUFNO01BQUM7O1FBRWpCLE1BQU0sd0JBQXdCO1FBQzlCLGVBQWUsTUFBTSxPQUFPLHVDQUFrRSxFQUN6RixLQUFLLE9BQUssRUFBRSxxQkFBcUI7O01BRTFDOztRQUVJLE1BQU0sd0JBQXdCO1FBQzlCLGVBQWUsTUFBTSxPQUFPLDhDQUFnRixFQUN2RyxLQUFLLE9BQUssRUFBRSwyQkFBMkI7O0lBQ2xEOzs7OztBRDdCTixTQUFTLHlCQUF5QjtBQUUzQixJQUFNLFlBQStCO0VBQzFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxpQkFBaUIsS0FBSSxDQUFFLEdBQUcsY0FBYyxNQUFNLEdBQUcsa0JBQWlCLENBQUU7Ozs7QUVQL0csU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxvQkFBb0I7O0FBUXZCLElBQU8sZUFBUCxNQUFPLGNBQVk7RUFOekIsY0FBQTtBQU9FLFNBQUEsUUFBUTs7Ozt1Q0FERyxlQUFZO0lBQUE7RUFBQTs7NEVBQVosZUFBWSxXQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFVBQUEsU0FBQSxzQkFBQSxJQUFBLEtBQUE7QUFBQSxVQUFBLEtBQUEsR0FBQTtBQ1R6QixRQUFBLHVCQUFBLEdBQUEsZUFBQTs7c0JES1ksWUFBWSxHQUFBLGVBQUEsRUFBQSxDQUFBO0VBQUE7OztnRkFJWCxjQUFZLEVBQUEsV0FBQSxnQkFBQSxVQUFBLDRCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OzhEQUFaLGNBQVksRUFBQSxTQUFBLENBQUEsRUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxxQkFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsaURBQUEscUJBQUEsRUFBQSxTQUFBLENBQUE7QUFBQSxHQUFBOzs7QUhMekIscUJBQXFCLGNBQWMsU0FBUyxFQUN6QyxNQUFNLENBQUMsUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDOyIsIm5hbWVzIjpbXX0=