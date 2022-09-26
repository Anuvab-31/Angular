import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuVariable: boolean = false;
  icon: boolean = true;
  icon1: boolean = false;
  dropDownVariable: boolean = false;
  dropdownVariable: boolean = false
  dropDownVariable1: boolean = false
  dropDownVariable2: boolean = false
  dropDownVariable3: boolean = false
  dropDownVariable4: boolean = false
  dropDownVariable5: boolean = false

  aboutusDroopdown: boolean = false
  public DummyData = [
    {
      "id": "1",
      "title": "Training",
      "childrens": [
        {
          "title": "Governance",
          "childrens": [
            {
              "title": "COBIT"
            },
            {
              "title": "ISO/IEC 38500"
            },
            {
              "title": "CGEIT"
            }
          ]
        },
        {
          "title": "Performance Management",
          "childrens": [
            {
              "title": "COBIT"
            },
            {
              "title": "ISO/IEC 38500"
            },
            {
              "title": "CGEIT"
            }
          ]
        },
        {
          "title": "Cybersecurity & Privacy",
          "childrens": [
            {
              "title": "COBIT"
            },
            {
              "title": "ISO/IEC 38500"
            },
            {
              "title": "CGEIT"
            }
          ]
        },
        {
          "title": "Continuity & Resilience ",
          "childrens": [
            {
              "title": "COBIT"
            },
            {
              "title": "ISO/IEC 38500"
            },
            {
              "title": "CGEIT"
            }
          ]
        },
        {
          "title": "Risk Management",
          "childrens": [
            {
              "title": "COBIT"
            },
            {
              "title": "ISO/IEC 38500"
            },
            {
              "title": "CGEIT"
            }
          ]
        },
        {
          "title": "Compliance Management",
          "childrens": [
            {
              "title": "COBIT"
            },
            {
              "title": "ISO/IEC 38500"
            },
            {
              "title": "CGEIT"
            }
          ]
        }
      ]
    },
    {
      "id": "2",
      "title": "Consulting",
      "childrens": [
        {
          "title": "COBIT"
        },
        {
          "title": "ISO/IEC 38500"
        },
        {
          "title": "CGEIT"
        }
      ]
    },
    {
      "title": "Solutions",
      "childrens": [
        {
          "title": "COBIT"
        },
        {
          "title": "ISO/IEC 38500"
        },
        {
          "title": "CGEIT"
        }
      ]
    },
    {
      "title": "Webstore",
      "childrens": [
        {
          "title": "COBIT"
        },
        {
          "title": "ISO/IEC 38500"
        },
        {
          "title": "CGEIT"
        }
      ]
    },
    {
      "title": "About us",
      "childrens": [
        {
          "title": "COBIT"
        },
        {
          "title": "ISO/IEC 38500"
        },
        {
          "title": "CGEIT"
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    console.log(this.menuVariable, "1");

  }
  closeMenu() {
    this.menuVariable = !this.menuVariable;
    this.icon = true;
    this.icon1 = false;

  }
  openDropDown() {
    // console.log(param)
    // if (param == "About us") {
    //   console.log("gggg");
    //   this.aboutusDroopdown = true;

    // }
    this.dropDownVariable = !this.dropDownVariable;
    this.dropdownVariable = !this.dropdownVariable;
  }
  openDropDown1() {
    this.dropDownVariable1 = !this.dropDownVariable1
  }
  openDropDown2() {
    this.dropDownVariable2 = !this.dropDownVariable2
  }
  openDropDown3() {
    this.dropDownVariable3 = !this.dropDownVariable3
  }
  openDropDown4() {
    this.dropDownVariable4 = !this.dropDownVariable4
  }
  openDropDown5() {
    this.dropDownVariable5 = !this.dropDownVariable5
  }
}
