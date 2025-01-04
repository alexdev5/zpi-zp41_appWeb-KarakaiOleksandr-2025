<template>
    <section class="grid gap-8">
        <h4>CSS-код Flexbox</h4>
        <code class="code-block">
            <pre>
.task-2-layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    height: calc(100% - 30px);
}

.task-2-layout-header {
    background: #fecd3e;
    padding: 16px 24px;
}

.task-2-layout-header-navigation {
    background: #fff;
    min-height: 35px;
    width: 300px;
}

.task-2-layout-content {
    background: #fff;
    flex: 1;

    .task-2-layout-sidebar-left {
        background: #3566f8;
    }

    .task-2-layout-aside-top {
        background: #fc5554;
        min-height: 50px;
        min-width: 100px;
    }

    .task-2-layout-body {
        border: 2px solid var(--app-color-n-30);
        min-height: 50px;
        min-width: 100px;

        display: flex;
        flex-direction: column;

        .task-2-layout-body-bottom-block {
            background: #fc5554;
            height: 40px;
            margin-top: auto;
        }
    }

    .task-2-layout-sidebar-right {
        background: #3566f8;
        min-height: 50px;
        min-width: 100px;
    }
}

.task-2-layout-content-grid {
    display: grid;
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 16px;

    .task-2-layout-sidebar-left {
        grid-row: 1 / -1;
    }

    .task-2-layout-aside-top {
        grid-column: 2 / span 2;
        grid-row: 1;
    }

    .task-2-layout-body {
        grid-column: 2;
        grid-row: 2;
    }

    .task-2-layout-sidebar-right {
        grid-column: 3;
        grid-row: 2;
    }
}

.fluid {
    .task-2-layout-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.task-2-layout-footer {
    background: #fecd3e;
    height: 100px;
    padding: 16px 24px;
}
            </pre>
        </code>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
