var store = [{
        "title": "Deploying 3scale to OpenShift Local",
        "excerpt":"Introduction This document will walk you through the process of installing Red Hat 3scale API Management, an API management product, on OpenShift Local, an OpenShift environment running on desktops and laptops. Prerequisites System requirements OpenShift Local requires the following system resources: 4 virtual CPUs (vCPUs)9 GB of memoryThe procedure on...","categories": ["en","product"],
        "tags": ["crc","3scale","openshift","openshift_local"],
        "url": "/en/product/deploy_3scale_on_crc/",
        "teaser": null
      },{
        "title": "3scaleをCRCにデプロイ",
        "excerpt":"はじめに API管理製品である Red Hat 3scale API ManagementをデスクトップやノートPCで動くOpenShift環境である CodeReady Containers にインストールする手順を紹介します。 前提条件 システム要件 CRCをインストールするには、以下のシステムリソースが必要です。 仮想CPU 4メモリー 8GBこのページの手順では、CRC仮想マシンにメモリーを最低10GB、できれば16GB割り当てることをおすすめします。ストレージ空き容量 35GB Note: 詳細については、CRCのドキュメントを参照してください。 アカウント Red Hat Developer Programへの登録が必要です。登録方法については 赤帽エンジニアブログの記事 を参照してください。 登録後に Token Generatorでサービスアカウントを作成し、ユーザー名とトークンをメモしてください。 ユーザー名は \"12345678|username\" のような書式で、トークンは\"eyJhbGciOiJSUzUxMiJ&#8230;&#8203;\"のような長い文字列です。 確認した環境 Fedora 31CRC 1.9.0OpenShift 4.3.103scale 2.8 CRCはWindows版、macOS版、Linux版があるので、他の環境でも試してみてください。 インストール手順 ダウンロードページからCRCとPull Secretをダウンロードします。ダウンロードしたCRCを展開して、コンソールで展開したディレクトリに移動します。$ ./crc setup Note: もしメモリーに余裕があれば、割当メモリーを増やすことをおすすめします。 ./crc config set memory...","categories": ["ja","product"],
        "tags": ["crc","3scale","openshift"],
        "url": "/ja/product/deploy_3scale_on_crc/",
        "teaser": null
      },{
        "title": "All-in-one OpenStack 16.1 インストール",
        "excerpt":"Note: このドキュメントは実験的な内容です。OpenStackは初めて触るので、適切な方法でない可能性があります。後述する未解決の問題があります。特定の環境で実施しただけで、他の環境に適用できる保証はありません。最後に、All-in-one OpenStackは16.1ではテクニカルプレビューなのでフルサポートされているインストール方法ではありません。 背景 OpenShift環境を構築するにあたって、OpenShiftインストーラーが対応している環境が必要です。AWSなどいくつか対応していますが、ここではOpenStackを試してみました。 参考資料 Product Documentation for Red Hat OpenStack Platform 16.1 All-in-one OSP 本来OSPは複数のサーバーにコンポーネントを分散してデプロイするものですが、検証用に サーバー1台にインストールする手順 が公開されているので、これに従ってインストールします。 未解決の問題 このドキュメントの手順では、以下の問題が残っています。 SELinuxこの手順では SELinux のルールが不十分なので追加の設定が必要です。OS再起動時の安定性OSを再起動すると、タイミングの問題なのか各コンポーネントにアクセスできない場合があります。ネットワークの安定性OVSがエラーを出力する場合があります。Swiftストレージの容量確認Swiftストレージに1TBを割り当てたつもりですが、実際に設定できたか確認できていません。 システム要件 (Quick Start Guide 1.1) ネットワークインターフェースが2つ必要です。例えば以下のように設定します。 インターフェース eth0default network 192.168.122.0/24gateway 192.168.122.1インターフェース eth1management network 192.168.25.0/24gateway 192.168.25.1 サンプル設定 このページでは、以下のように設定します。 ホスト名osp.example.cometh0 IPアドレス192.168.122.2eth1 IPアドレス192.168.25.2DNS server192.168.25.1 対象のハードウェア CPUIntel Xeon E5-2670 10...","categories": ["ja","trial"],
        "tags": ["openstack"],
        "url": "/ja/trial/openstack/",
        "teaser": null
      },{
        "title": "OpenTracing on 3scale",
        "excerpt":"Introduction This document will walk you through how to setup Jaeger, enable OpenTracing on APIcast and Echo-api, then confirm the integration on OpenShift 4.x. Prerequisites Software requirements Red Hat OpenShift Container Platform 4.6Red Hat 3scale API Management 2.9 Note: This procedure would work on some previous versions but isn&#8217;t confirmed...","categories": ["en","product"],
        "tags": ["3scale","openshift","jaeger","opentracing"],
        "url": "/en/product/opentracing_on_3scale/",
        "teaser": null
      }]
