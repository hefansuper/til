// 抽象工厂模式。

// 抽象工厂，具体工厂，抽象产品，具体产品。

// 抽象工厂，抽象产品，不能实例化，定义了一些公共的特性。
// 具体工厂 继承至 抽象工厂，生成的实例就是最后的产品。
// 具体产品 继承至 抽象产品，生成的是产品族里面的某些具体的产品。
// 抽象产品与具体工厂的联系是，在具体工厂中的方法会关联抽象产品。



// 抽象工厂。
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOs() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }

  // 提供硬件的接口。
  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
}

// 抽象产品-OS
class OS {
  controlHardWare() {
    throw new Error("OS-抽象产品的方法不允许直接调用，你需要将我重写！");
  }
}
// 抽象产品-硬件
class HardWare {
  controlHardWare() {
    throw new Error("HardWare-抽象产品的方法不允许直接调用，你需要将我重写！");
  }
}



// OS-具体产品-安卓os IOS
class AndroidOs extends OS {
  controlHardWare() {
    console.log('安卓os --ready')
  }
}
class IOS extends OS {
  controlHardWare() {
    console.log('IOS --ready')
  }
}

// 硬件-具体产品- 高通
class Qualcomm extends HardWare {
  controlHardWare(){
    console.log('高通-HardWare ready')
  }
}
// 硬件-具体产品- 联发科
class MTK extends HardWare {
  controlHardWare(){
    console.log('联发科-HardWare ready')
  }
}


// 具体工厂。
class FakeStarFactory extends MobilePhoneFactory {
  createOs() {
    // 提供安卓实例。
    return new AndroidOs()
  }

  createHardWare() {
    // 提供高通的硬件实例。
    return new Qualcomm()
  }
}



// 生成具体的手机。
const myPhone = new FakeStarFactory()

// 硬件。
// 1：生成硬件。
const  myHardWare= myPhone.createHardWare()
// 2: 调用硬件。
myHardWare.controlHardWare()

// 软件
const myOS = myPhone.createOs()
myOS.controlHardWare()
